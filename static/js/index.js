let form = document.getElementById('dataForm');
            form.onsubmit = (e)=>{
                e.preventDefault();
            const url = "http://localhost:1418/sent"
            let data = new URLSearchParams();
            for(pair of new FormData(e.target)){
                data.append(pair[0] , pair[1]);
            }

            fetch(url,{
                method:"post",
                body:data
            }).then(res=> res.json())
            .then(res2 => {
                console.log(res2)
                location.reload()
            });
        }

        function remove(item){
            fetch("http://localhost:1418/remove/" + item.innerHTML , {
                method:"delete"
            }).then(res=> res.json())
            .then(res2 => {
                console.log(res2);
                location.reload();
            });
        }