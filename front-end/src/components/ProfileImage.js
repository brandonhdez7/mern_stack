import React, {Component} from 'react'
import axios from 'axios'

class ProfileImage extends Component {
    constructor(){
        super()
        this.state ={
            ImageProfile: ''

        }
    }

    fileSelectedHandler(event){
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler(){
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.ImageProfile)
        axios.post('http://localhost:5000' , fd)
            .theb(res => {
                console.log(res)
            })

    }



  render () {
    return (
      <div>
        
      </div>
    )
  }
}

export default ProfileImage;