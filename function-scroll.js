
let secao_a = document.querySelector(".secao-a").offsetTop;
let secao_b = document.querySelector(".secao-b").offsetTop;
let secao_c = document.querySelector(".secao-c").offsetTop;
let secao_d = document.querySelector(".secao-d").offsetTop;
let rodape = document.querySelector(".rodape").offsetTop;

// let item_menu = document.querySelectorAll(".item-list");
let links_menu = document.querySelectorAll(".item-list");

rolaTela(links_menu )

    function rolaTela(array_link){
        array_link.forEach(function(clicado){
            clicado.addEventListener("click",()=>{
                    if (clicado == array_link[0]) {
                        window.scroll({
                            top: secao_a,
                            behavior: 'smooth'
                        });
                    }
                    else if (clicado == array_link[1]) {
                        window.scroll({
                            top: secao_b,
                            behavior: 'smooth'
                        });
                    }
                    else if (clicado == array_link[2]) {
                        window.scroll({
                            top: secao_c,
                            behavior: 'smooth'
                        });
                    }
                    else if (clicado == array_link[3]) {
                        window.scroll({
                            top: secao_d,
                            behavior: 'smooth'
                        });
                    }
                    else if (clicado == array_link[4]) {
                        
                        window.scroll({
                            top: rodape,
                            behavior: 'smooth'
                        });
                    }
            })
        })
    }


   
