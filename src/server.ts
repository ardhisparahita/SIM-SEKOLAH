import app from "./app"
const port: any = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})