
const http = require('http');
const fs = require('fs')

const renderHtml = (req, res) => {
    const { url } = req;
    if (url === "/"){
        fs.readFile("./index.html", (err, html) => {
            if (err) {
                res.write("Hubo un error");
                res.end();
            }

            res.write(html);
            res.end();
        });
    };

    if (url === "/contacto"){
        fs.readFile("./contacto.html", (err, html) => {
            if (err) {
                res.write("Hubo un error");
                res.end();
            }

            res.write(html);
            res.end();
        });
    };
    if (url === "/clientes"){
        fs.readFile("./clientes.html", (err, html) => {
            if (err) {
                res.write("Hubo un error");
                res.end();
            }

            res.write(html);
            res.end();
        });
    };
    if (url === "/productos"){
        fs.readFile("./productos.html", (err, html) => {
            if (err) {
                res.write("Hubo un error");
                res.end();
            }

            res.write(html);
            res.end();
        });
    };
    if (url === "/servicios"){
        fs.readFile("./servicios.html", (err, html) => {
            if (err) {
                res.write("Hubo un error");
                res.end();
            }

            res.write(html);
            res.end();
        });
    };
}

var server = http.createServer(renderHtml);
server.listen(8080);