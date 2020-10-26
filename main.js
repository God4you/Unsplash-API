$("#myForm").submit(e => {
    e.preventDefault()
    
    //Emptying the search
    $("#result").empty()

    let search = $("#search").val()
    let client_id='gV19f1Py-heLx8S4MjAPGgNH5ze1NTzu1fnTGsWggaw'
    let url = `https://api.unsplash.com/search/photos/?query=${search}&client_id=${client_id}&per_page=20.`
    
    //Getting the photo and data and creating card for each.
    $.ajax({
      method:'GET',
      url: url,
      success:data => {console.log(data)
      data.results.forEach(photo => {
        $("#result").append(
          `<div class="col-md-6 col-lg-3">
            <div class="card mb-2" style="width: 18rem;">
                <img src="${photo.urls.regular}" class="card-img-top"/>
                <div class="card-body">
                  <h5 class="card-title">${photo.alt_description}</h5>
                  <p class="card-text">${photo.description}.</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Likes: ${photo.likes}</li>
                  <li class="list-group-item">Photo taken by: <br>${photo.user.first_name} ${photo.user.last_name}</li>
                  <li class="list-group-item"><img src="${photo.user.profile_image.large}" class="card-img-top"/></li>
                </ul>
            </div>
        </div>`
        )
      })
    }
  })
})