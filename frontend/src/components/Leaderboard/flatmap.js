const Results = {
    "status": "OK",
    "results": [
      {
        "username": "Tek",
        "results": [
          {
            "_id": "5fcf5136ed54b686f928552e",
            "userID": "5fce59c4d58284702342adfd",
            "points": 5,
            "category": "General",
            "difficulty": "Easy",
            "quizType": "Multiple Choice",
            "__v": 0
          }
        ]
      },
      {
        "username": "Tam",
        "results": [
          {
            "_id": "5fcf53c3ed54b686f9285530",
            "userID": "5fcf53a2ed54b686f928552f",
            "points": 9,
            "category": "Film",
            "difficulty": "Moderate",
            "quizType": "True/False",
            "__v": 0
          },
          {
            "_id": "5fcf583084354d89eb448dbd",
            "userID": "5fcf53a2ed54b686f928552f",
            "points": 5,
            "category": "General",
            "difficulty": "Hard",
            "quizType": "True/False",
            "__v": 0
          }
        ]
      },
      {
        "username": "katietest",
        "results": []
      }
    ]
  }

//   arr.flatMap(x => [x, x * 2]);
//   // is equivalent to
//   arr.reduce((acc, x) => acc.concat([x, x * 2]), []);

const test = Results.results.flatMap((user) => {return user.results.map((result) => {
    result.username = user.username
    return result
})})
for (t of test) {
    console.log(t)
}
