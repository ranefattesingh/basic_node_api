const express = require('express')
const app = express()
const port = 3000

// Middleware
app.use(express.json())

let todolist = [
	{
		id: 1,
		title: "write c++ codes",
		description: "simple programs",
		completed: false

	}
]

app.post('/create', (req, res) => {	
	try {
		let todoItem = { title, description } = req.body
		todoItem.completed = false
		todoItem.id = todolist.length
		todolist.push(todoItem)
		res.send(todoItem)
	} catch(err) {
		res.send("Server error")
	}
})

app.put('/update/:id', (req, res) => {
	try {
		console.log(req.params)
		const updateIndex = todolist.findIndex(x => x.id === parseInt(req.params.id))
		todolist[updateIndex].completed = !todolist[updateIndex].completed
		res.send(todolist[updateIndex])
	} catch(err) {
		res.send(err)
	}
});

app.delete('/delete/:id', (req, res) => {
        try {
                const index = todolist.findIndex(x => x.id === parseInt(req.params.id))
                const item = todolist[index]
		console.log(item)
		todolist.splice(index, 1)
                res.send(item)
        } catch(err) {
                res.send(err)
        }
});


app.get('/', (req, res) => {
	res.send(todolist)
})





app.listen(port, () => console.log(`server listening on port ${port}`))
