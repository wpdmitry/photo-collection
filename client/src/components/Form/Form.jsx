import React, { Component } from 'react';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import {sendPhotos} from '../../actions';

import './Form.scss';

class Form extends Component {
  stateForm = {};
  
  checkTypes = (file) => {
    if (file.type !== 'image/png') {
      alert('Загрузите фотографии в формате png');
    }
  };

  handleChangeTitle = (e) => {
    this.stateForm = {
      ...this.stateForm, 
      title: e.target.value,
    };
  };

  onSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    const files = document.getElementById('files').files;

    if (files.length === 0) {
      alert('Сначала загрузите фотографии');
      return;
    }

    for (let i = 0; i < files.length; i++) {
      formData.append(`photos`, files[i]);

      // console.log(files[i].name, files[i].size, files[i].lastModified, files[i].type);
      // this.checkTypes(files[i]);
      // img.src = URL.createObjectURL(files[i]);
    }

    formData.append('title', this.stateForm.title);
    formData.append('place', this.props.place.coords[0]);
    formData.append('place', this.props.place.coords[1]);

    this.props.sendPhotos(formData);
  };

  render() {
    return (
      <div className="load-photos-form">
          <Card>
            <CardContent>
              <form 
                  className="load-photos-form__form" 
                  action="" 
                  method="POST" 
                  onSubmit={this.onSubmit} 
                  encType="multipart/form-data"
                >
                  <TextField 
                    onChange={this.handleChangeTitle}
                    label="Описание фотографии"
                    className="load-photos-form__input" 
                  />

                  <div className="input-upload load-photos-form__input">
                    <Button>
                      <label className="input-upload__label">
                        <Icon>cloud_upload</Icon>
                        <span>Выбрать файлы</span>
                        <input type="file" id="files" name="files" multiple style={{display: 'none'}} />
                      </label>
                    </Button>
                  </div>

                  <div className="input-place load-photos-form__input">
                    <Button>
                      <label className="input-upload__label">
                        <Icon>place</Icon>
                        {!this.props.place ? 
                          <span>Указать место</span>
                          :
                          <TextField 
                            label="Место"
                            className="load-photos-form__input"
                            value={this.props.place.addressName}
                           />
                        }
                      </label>
                    </Button>
                  </div>
                
                  <Button type="submit" className="load-photos-form__button" >
                    Загрузить
                  </Button>
              </form>
            </CardContent>
          </Card>
      </div>
    )
  }
}

export default connect(
  null,
  dispatch => ({
    sendPhotos: (collection) => dispatch(sendPhotos(collection)),
  })
)(Form);