# split-the-bill-backend
This is the backend repository for the Build Sprint project: Split-The-Bill

POST
https://split-the-bill-1.herokuapp.com/api/auth/register




POST
https://split-the-bill-1.herokuapp.com/api/auth/login


User registration shape:
username: string,
password: string


Existing users:
username: "admins", password: "admins"





GET
https://split-the-bill-1.herokuapp.com/api/bills
Get user


POST
https://split-the-bill-1.herokuapp.com/api/bills


    "resturant": 
    "numberOfFriends":
    "total":
    "split":


DELETE
https://split-the-bill-1.herokuapp.com/api/bills/{id}
Deletes the data u wanted to delete 
Needs ID

PUT
https://split-the-bill-1.herokuapp.com/api/bills/{id}
If you want to update the bill
Needs ID



GET
https://split-the-bill-2.herokuapp.com/api/friends
"name"
"email"


Gets all the emails that I created


POST
https://split-the-bill-2.herokuapp.com/api/friends
Creates a new friend


DELETE
https://split-the-bill-2.herokuapp.com/api/friends{id}
Delete a freind

PUT
https://split-the-bill-2.herokuapp.com/api/friends
updates a friend