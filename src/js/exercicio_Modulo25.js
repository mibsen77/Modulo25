class NotasP{
    constructor(notas){
        this.notas=[]
        this.media =0
        this.situacao=''
        
        }
     MediaFinal(){
        let media=0
        let i=0
        this.notas.forEach(soma =>{
            media+=this.notas[i]
            console.log("notas[" + i + "] = " + this.notas[i])
            i++
            
        })
        media=media/this.notas.length
       //console.log('media calculada= ' + media  )
       this.media=media
        return media
       
     }
     Situacao(){
       if(this.media >= 7 )
            this.situacao='aprovado'
        else
            this.situacao='reprovado'
        
        return this.situacao
     }

     
}
  

/*const nova_nota= new NotasP()
nova_nota.notas=[9,2,8,3]
console.log('media final =' + nova_nota.MediaFinal())
console.log(nova_nota.Situacao())
console.log(nova_nota.media)
*/

const formulario1 = document.getElementById('formulario-01');

if(formulario1)
    formulario1.addEventListener('submit', function( evento ){

        evento.preventDefault();
        evento.stopPropagation();

       
        
        let dados = new FormData(this);

        let novas_notas= new NotasP;

        for(let key of dados.keys()) {
            console.log(key)
            let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // é um número
            console.log(numero)
            if(!isNaN(numero)) {
                novas_notas.notas.push(numero);
            }

        }

        //console.log(novas_notas);

        texto ='media final =' + novas_notas.MediaFinal() + ' (' + novas_notas.Situacao() + ')';

        document.getElementById('resultado').innerHTML = texto;

    });

