export async function ajax(props) {
  let { url, cbSuccess } = props;

  await fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => cbSuccess(json))
    .catch((err) => {
      if (err.status === 404) {
        document.getElementById("main").innerHTML = `
        <div class="error">
          <p>Error : There is nothing to show!</p>
        </div> 
        `;

        document.querySelector(".loader").style.display = "none";

        // console.log(err);
      } else {
        let message = err.statusText || "Error to access API";

        document.getElementById("main").innerHTML = `
       <div class="error">
        <p>Error ${err.status}: ${message}</p>
       </div> 
      `;

        document.querySelector(".loader").style.display = "none";

        console.log(err);
      }
    });
}
