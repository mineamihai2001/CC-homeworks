package main

import (
	"fmt"
	"net/http"
	"os"
	"strconv"

	"github.com/joho/godotenv"
	. "github.com/mineamihai2001/cc/tema_1/core"
	"github.com/mineamihai2001/cc/tema_1/database"
	"go.mongodb.org/mongo-driver/bson"
)

type ApiResponse struct {
	Status  string `json:"status"`
	Message string `json:"message"`
}

func main() {
	err := godotenv.Load()
	Check(err, "Error loading .env file")
	port, _ := strconv.Atoi(os.Getenv("PORT"))

	server := NewServer(port)
	client := db.NewClient("random_facts")

	// Read All
	server.Get("/", func(req *Request, res *Response) {
		results := db.Find[db.Fact](client, "facts", bson.D{})

		res.Json(*results).Status(http.StatusOK)
	})

	// Read with category
	server.Get("/:category", func(req *Request, res *Response) {
		args := req.Params()

		category := db.Category(args[0])
		filter := bson.D{{"category", category}}
		results := db.Find[db.Fact](client, "facts", filter)

		res.Json(results).Status(http.StatusOK)
	})

	// Create
	server.Post("/", func(req *Request, res *Response) {
		var dto db.CreateFactDto
		Body(req, &dto)
		fmt.Println(dto)

		if dto.Category == "" {
			dto.Category = db.GENERAL
		}

		id := db.Insert(client, "facts", dto)
		res.Raw(id).Status(http.StatusCreated)
	})

	// Update
	server.Put("/", func(req *Request, res *Response) {
		var dto db.UpdateFactDto
		Body(req, &dto)

		if dto.Category == "" {
			dto.Category = db.GENERAL
		}
		update := bson.M{
			"$set": bson.M{
				"category": dto.Category,
				"question": dto.Question,
				"answer":   dto.Answer,
			},
		}
		result := db.Update(client, "facts", dto.Id, update)
		res.Json(result)
	})

	// Delete
	server.Delete("/:id", func(req *Request, res *Response) {
		args := req.Params()

		id := args[0]
		result := db.Delete(client, "facts", id)

		status := http.StatusOK
		if result == 0 {
			status = http.StatusNotFound
		}
		dto := db.DeleteFactResponseDto{
			DeletedCount: result,
		}

		res.Json(dto).Status(status)
	})

	server.Run(func() {
		fmt.Println("Server listening on port:", port)
	})
}
