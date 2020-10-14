package main

import "fmt"
// import "log"
import "net/http"

func response(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Rockhopper-Penguin")
  }


func main() {
	fmt.Println("Server runngin -> http://127.0.0.1:8080/")
	http.HandleFunc("/", response)
	http.ListenAndServe(":8080", nil)
}