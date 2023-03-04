package core

import "net/http"

type Response struct {
	headers map[string]string
	body    string
	status  int
}

func (r *Response) WriteHeaders(w http.ResponseWriter) {
	for key, value := range r.headers {
		w.Header().Set(key, value)
		w.WriteHeader(http.StatusOK)
	}
}

func (r *Response) Raw(object string) *Response {
	r.headers["Content-Type"] = "text/plain"
	r.body = object
	return r
}

func (r *Response) Json(object any) *Response {
	r.headers["Content-Type"] = "application/json"
	r.body = Stringify(object)
	return r
}

func (r *Response) Html(object any) *Response {
	r.headers["Content-Type"] = "text/html"
	r.body = Stringify(object)
	return r
}

func (r *Response) Status(status int) *Response {
	r.status = status
	return r
}
