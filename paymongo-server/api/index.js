const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("");
    console.log("==============================");
    console.log("PayMongo server running!");
    console.log("http://localhost:" + PORT);
    console.log("==============================");
});
export default app;
