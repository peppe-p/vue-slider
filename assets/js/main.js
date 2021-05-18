//Creare uno slider di immagini
//Lo slider prevederà due frecce(icone) che permettono di scorrere tra le immagini dello slider
//Inoltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera(usate un event listener su document e ascoltate per il keyup)
//Utiliziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider
//Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider
//Clicchiamo sui pallini e mostriamo l’immagine corrispondente
var app = new Vue(
    {
        el: "#root",
        data: {
            i: 0,
            imageList: ["./assets/img/1.jpg", "./assets/img/2.jpg", "./assets/img/3.jpg"],
        },
        methods: {
            prev() {
                if (this.i == 0) {
                    return this.i = this.imageList.length - 1
                }
                return this.i -= 1
            },

            next() {
                if (this.i == this.imageList.length - 1) {
                    return this.i = 0
                }
                return this.i += 1
            }
        },
        mounted() {
            window.addEventListener("keydown", (element) => {
                if (element.key == "ArrowRight") {
                    return this.next()
                } else if (element.key == "ArrowLeft") {
                    return this.prev()
                }
            });
        }
    }
);
