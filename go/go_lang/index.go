package main

import "fmt"
// import "log"
import "net/http"


func main() {
	fmt.Printf("Server runngin -> http://127.0.0.1:8080/\n")
	http.ListenAndServe(":8080", nil)
}