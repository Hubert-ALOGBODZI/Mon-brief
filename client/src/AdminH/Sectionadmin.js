import React, { useState } from 'react'
import "./Sectionadmin.css"

const Sectionadmin = () => {

    const [selectedImages,setSelectedImages] = useState([])

    const onSelectFile = (e) =>{
        const selectedFiles = e.target.files;
        const selectedFilesArray = Array.from(selectedFiles);

        const imagesArray = selectedFilesArray.map((file)=>{
            return URL.createObjectURL(file)
        });

        setSelectedImages((previousImages)=> previousImages.concat(imagesArray));


        // setSelectedImages(imagesArray);
        // console.log(imagesArray);
        // console.log(selectedFilesArray);
        // console.log(selectedFiles);
        // console.log(Array.isArray(selectedFiles));
    }
  return (
    <section>
        <label>
            +Add Images <br />
            <span>up to 10 images</span>
            <input type="file"
            name='images'
            onChange={onSelectFile}
            multiple
            accept='image/png , image/jpeg, image/webp' />
        </label>

        {
            selectedImages.length > 0 &&
            (selectedImages.length > 10 ? (

                <p className="error">
                    you can't upload more than 10 <br />

                    <span>please delete <b>{selectedImages.length - 10}</b>of them</span>
                </p>
            ) : (
                <button className='upload-btn' onClick={() => console.log("upload image")}>
                    Upload {selectedImages.length} Image{selectedImages.length === 1 ? " ": "S" }
                </button>

            ))
        }









        <div className="images">
            {
                selectedImages && 
                selectedImages.map((image,index)=>{
                    return(
                        <div key={image} className="image">
                            <img 
                            src={image} 
                            alt="upload" 
                            style={{
                                height:"200px",
                                width:"200px",
                                objectFit:"cover"
                            }} />
                            <button onClick={()=> setSelectedImages(selectedImages.filter((e)=>e !== image))}>
                                Delete image
                            </button>
                            <p>{index + 1}</p>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Sectionadmin