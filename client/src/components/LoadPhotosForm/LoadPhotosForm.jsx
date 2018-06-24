import React, { Component } from 'react';

export default class LoadPhotosFrom extends Component {
  checkTypes = (file) => {
    if (file.type !== 'image/png') {
      alert('Загрузите фото в формате png');
    }
  };

  onSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    const files = document.getElementById('files').files;

    if (files.length === 0) {
      console.log('Not found files');
      return;
    }

    for (let i = 0; i < files.length; i++) {
      formData.append(`photo`, files[i]);

      // console.log(files[i].name, files[i].size, files[i].lastModified, files[i].type);
      // this.checkTypes(files[i]);
      // img.src = URL.createObjectURL(files[i]);
    }


    fetch('http://localhost:3000/api/photos', {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(console.log, console.log);

    // console.log(formData.get('photo'));
    // console.log(formData.getAll('photo'));
  };

  render() {
    return (
      <form action="" method="POST" onSubmit={this.onSubmit} encType="multipart/form-data">
        <input type="file" id="files" name="files" multiple/>
        <input type="submit" value="Загрузить"/>
        <img src="" id="img" alt=""/>
      </form>
    )
  }
}