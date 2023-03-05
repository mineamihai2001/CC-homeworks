package db

import "go.mongodb.org/mongo-driver/bson/primitive"

type Schema interface{}

type Category string

const (
	GENERAL   Category = "general"
	HISTORY   Category = "history"
	GEOGRAPHY Category = "geography"
	SPORT     Category = "sport"
)

type Fact struct {
	Id       primitive.ObjectID `json:"id" bson:"_id"`
	Category Category           `json:"category" bson:"category"`
	Question string             `json:"question" bson:"question"`
	Answer   string             `json:"answer" bson:"answer"`
}

type CreateFactDto struct {
	Category Category `json:"category"`
	Question string   `json:"question"`
	Answer   string   `json:"answer"`
}

type UpdateFactDto struct {
	Id       string   `json:"id"`
	Category Category `json:"category"`
	Question string   `json:"question"`
	Answer   string   `json:"answer"`
}

type DeleteFactResponseDto struct {
	DeletedCount int64 `json:"deletedCount"`
}
