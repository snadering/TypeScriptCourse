# Week 3 - GraphQL
## Sander Roust
### GraphQL Successful Operation
<img width="1722" alt="Screenshot 2024-02-12 at 16 26 53" src="https://github.com/snadering/TypeScriptCourse/assets/113049401/5750c005-b6e9-4573-ba40-9b677efb1b9b">

## Snippet from exercise

**Task:** Add a new query to get all addresses with the persons that live there

**My Input:**
```graphql
query Query {
  addressesWithPeople {
    address {
      id
      zipCode
    }
    residents {
      id
      name
      age
    }
  }
}
```
**My Output:**

```json
{
  "data": {
    "addressesWithPeople": [
      {
        "address": {
          "id": "1",
          "zipCode": 2620
        },
        "residents": [
          {
            "id": "1",
            "name": "Sander",
            "age": 21
          }
        ]
      },
      {
        "address": {
          "id": "2",
          "zipCode": 2625
        },
        "residents": [
          {
            "id": "2",
            "name": "Jack",
            "age": 15
          }
        ]
      },
      {
        "address": {
          "id": "3",
          "zipCode": 4000
        },
        "residents": [
          {
            "id": "3",
            "name": "Julius",
            "age": 12
          }
        ]
      }
    ]
  }
}
```