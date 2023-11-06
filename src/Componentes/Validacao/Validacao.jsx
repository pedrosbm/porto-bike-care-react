import React from "react";


// let {id} = useParams('editar')
    
// if(props.match.path.toLowerCase().includes('editar')){
//     id=props.match.params.id;
// }

// const [novo,setNovo] = useState({
//     codigo:id,
//     titulo:"",
//     preco:"",
//     quantidade:""
// })
// const handleChange = (e) =>{
//     setNovo({...novo,[e.target.name]:e.target.value})
// }

// let metodo = "post"
// if (id) {
//     metodo = "put"
// }

// useEffect(()=>{
//     if(id){
        
//         fetch(`http://localhost:8080/appRWD/rest/produto/${id}`).then(resp=>{
//             return (resp.json())
//         }).then(data=>{
//             setNovo(data)
//         })
//     }
// },[id])

// const handleSubmit = e =>{
//     e.preventDefault()
//     fetch(`http://localhost:8080/appRWD/rest/produto/${id ? id : ""}`,{
//         method : metodo,
//         headers:{
//             'Content-Type':'application/json'
//         },
//         body: JSON.stringify(novo)
//     }).then(()=>{
//         window.location = "/"
//     })
// }

function Validacao () {
    return(
        <>
        <div>
         <form>
            <section>
                <h2>Envie imagens da bike</h2>
                <fieldset>
                    <label htmlFor="fotoSerie">Envie uma foto mostrando o número de série da bike: </label>
                    <input type="file" name="fotoSerie" />

                    <label htmlFor="foto1">Envie fotos da lateral esquerda da bike: </label>
                    <input type="file" name="foto1" />

                    <label htmlFor="foto2">Envie fotos da lateral direita da bike: </label>
                    <input type="file" name="foto2"  />

                    <label htmlFor="foto3">Envie fotos do quadro da bike: </label>
                    <input type="file" name="foto3"  />

                    <label htmlFor="foto4">Envie fotos do freio da bike: </label>
                    <input type="file" name="foto4"  />

                    <label htmlFor="foto5">Envie fotos do guidão da bike: </label>
                    <input type="file" name="foto5"  />

                    <label htmlFor="foto6">Envie fotos da marcha da bike: </label>
                    <input type="file" name="foto6"  />

                    <label htmlFor="foto7">Envie fotos da pneu da bike: </label>
                    <input type="file" name="foto7"  />

                    <label htmlFor="foto8">Envie fotos do aro da bike: </label>
                    <input type="file" name="foto8"  />

                    <label htmlFor="foto9">Envie fotos do banco da bike: </label>
                    <input type="file" name="foto9"  />
                </fieldset>
              </section>
           </form>
       </div>
     </>
  )
}
export default Validacao;