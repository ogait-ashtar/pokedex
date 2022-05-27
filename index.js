const express = require("express");
const app = express();
const path = require("path"); // biblioteca do express para linkar o js da pasta public

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));// achar os arquivos estaticos de js da pasta public para linkar o css e script

const pokedex = [
    {
        id: 1,
        nome:"Bulbasaur",
        descricao: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
        tipo: "Grass",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    },

    {
        id: 2,
        nome: "Charmander",
        descricao: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
        tipo: "Fire",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",

    },

    {
        id: 3,
        nome: "Squirtle",
        descricao: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
        tipo: "Water",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",

    },


];

//rotas

app.get("/", (req, res) =>{
    res.render("index", {pokedex});
});

app.listen(3000, () =>
    console.log("Rodando em http://localhost:3000"));