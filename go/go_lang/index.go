package main

import "fmt"
// import "log"
import "net/http"


func main() {
	fmt.Println("Server runngin -> http://127.0.0.1:8080/")
	http.ListenAndServe(":8080", nil)
}