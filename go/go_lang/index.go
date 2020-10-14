package main

import "fmt"
// import "log"
import "net/http"


func main() {
	fmt.Println("Server runngin -> http://127.0.0.1:8080/")
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Println(w, "Rockhopper-Penguin")
	})
	http.ListenAndServe(":8080", nil)
}