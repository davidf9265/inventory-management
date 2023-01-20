import React, { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Input,
  Box
} from "@mui/material";
import axios from "axios";
import { Image } from "@mui/icons-material";
import { registerStyles } from "@emotion/utils";

function AddItemDialog({ open, onClose }) {
  const [data, setData] = useState({});
  const [files, setFiles] = useState({});
  const [rformData, setRformdata] = useState(new FormData());
  const [previewImage, setPreviewImage] = useState('')
  const inputFileRef = useRef(null);

  const handleButtonClick = () => {
    if (inputFileRef.current !== null) {
      inputFileRef.current.click();
    }
  }

  // para reiniciar los estados.
  // useEffect(() => {
  //   setData({})
  //   setFiles({})
  //   setRformdata(new FormData())
  // }, []);

  const handleChangeField = (event) => {
    console.log(data);
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
    rformData.set(event.target.name, event.target.value);
    setRformdata(rformData);
  };

  const handleChangeFile = (event) => {
    console.log(event.target.files[0]);
    setFiles({
      ...files,
      [event.target.name]: event.target.files[0],
    });
    // setData({
    //   ...data,
    //   ["files"]: event.target.files[0],
    // });
    if(event.target.id == "main_image"){
      const file = event.target.files[0]
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      }
      reader.readAsDataURL(file);
      rformData.append("main_image", event.target.files[0]);
      setRformdata(rformData);
    }
    else{
      rformData.append("other_media", event.target.files[0]);
      setRformdata(rformData);
    }
    console.log(previewImage)
  };

  const handleCreateItem = (event) => {
    event.preventDefault();

    // const formData = new FormData();

    // const fileArray = Array.from(Object.values(files)[0]);

    // formData.set("files", fileArray);

    // const keys = Object.keys(data);
    // keys.forEach((key) => {
    //   formData.set(key, data[key]);
    // });

    // console.log(fileArray);

    console.log(rformData)

    axios
      .post("http://192.168.1.92:5000/Item/createNew", rformData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Agregar nuevo item</DialogTitle>
      <DialogContent>
        <form>
          <FormGroup>
            <TextField
              onChange={handleChangeField}
              required
              name="name"
              color="primary"
              variant="standard"
              label="Nombre del componente"
            />
            <TextField
              onChange={handleChangeField}
              required
              name="quantity"
              type="number"
              color="primary"
              variant="standard"
              label="Cantidad del componente"
            />
            <TextField
              onChange={handleChangeField}
              required
              name="unit_price"
              type="number"
              color="primary"
              variant="standard"
              label="Precio unitario"
            />
          </FormGroup>
          <FormGroup >
            <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
              <input id="main_image" ref={inputFileRef} onChange={handleChangeFile} type="file" style={{ display: "none" }} />
              <Button onClick={handleButtonClick}>Imagen del ítem</Button>
            </Box>
            {/* <Input
              id="main_image"
              name="image_path"
              type="file"
              accept="images/*"
              sx={{ display: "none" }}
              onChange={handleChangeFile}
            /> */}
            {previewImage && (
              <img 
                src={previewImage}
                style={{ 
                  width: "auto",
                  height: "auto",
                  maxWidth: "100%",
                  maxHeight: "100%"
                }}  
              />
            )}
          </FormGroup>
          <FormGroup sx={{ mt: 2 }}>
            <FormLabel>Otros archivos/media</FormLabel>
            <Input
              type="file"
              onChange={handleChangeFile}
              //accept="image/*"
              capture="user"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="file"
              onChange={handleChangeFile}
              //accept="image/*"
              capture="user"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="file"
              onChange={handleChangeFile}
              //accept="image/*"
              capture="user"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="file"
              onChange={handleChangeFile}
              //accept="image/*"
              capture="user"
            />
          </FormGroup>
          {/* <FormGroup className="mb-5">
            <FormLabel>Propiedades</FormLabel>
            <FormControl
              as="textarea"
              placeholder="Ingresa las propiedades TODO: aquí debe aparecer un template predefinido"
              style={{ height: "200px" }}
            />
          </FormGroup>
          <FormGroup controlId="image0" className="mb-3">
            <FormLabel>Imagen principal</FormLabel>
            <FormControl type="file" onChange={handleChangeFile} />
          </FormGroup>
          <FormGroup controlId="media1">
            <FormLabel>Otros archivos de visualización</FormLabel>
            <FormControl type="file" onChange={handleChangeFile} />
          </FormGroup>
          <FormGroup controlId="media2">
            <FormControl type="file" onChange={handleChangeFile} />
          </FormGroup>
          <FormGroup controlId="media3">
            <FormControl type="file" onChange={handleChangeFile} />
          </FormGroup>
          <FormGroup controlId="media4">
            <FormControl type="file" onChange={handleChangeFile} />
          </FormGroup>
          <Button type="submit">Crear ítem</Button> */}
        </form>
        {/* <DialogContentText>
          Nombre del item
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Nombre"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogContent>
        <DialogContentText>
          Cantidad del item
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Cantidad"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogContent>
        <DialogContentText>
          Precio unitario
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Cantidad"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogContent>
        <DialogContentText>
          Precio unitario
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Cantidad"
          type="email"
          fullWidth
          variant="standard"
        /> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={handleCreateItem}>Registrar</Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddItemDialog;
//   <Modal.Body>
//     <Form onSubmit={handleCreateItem}>
//       <FormGroup className="mb-3" controlId="name">
//         <FormLabel>Nombre</FormLabel>
//         <FormControl
//           type="text"
//           placeholder="Escribe el nombre"
//           onChange={handleChangeField}
//         />
//         <Form.Text className="text-muted">
//           Nombre con descripción detallada del producto.
//         </Form.Text>
//       </FormGroup>
//       <FormGroup className="mb-3" controlId="quantity">
//         <FormLabel>Cantidad</FormLabel>
//         <FormControl
//           type="text"
//           placeholder="Ingresa la cantidad"
//           onChange={handleChangeField}
//         />
//         <Form.Text className="text-muted">
//           Cantidad del componente.
//         </Form.Text>
//       </FormGroup>
//       <FormGroup className="mb-3" controlId="unit_price">
//         <FormLabel>Precio</FormLabel>
//         <FormControl
//           type="text"
//           placeholder="Precio unitario"
//           onChange={handleChangeField}
//         />
//         <Form.Text className="text-muted">
//           Ingresa el precio por unidad.
//         </Form.Text>
//       </FormGroup>
//       <FormGroup className="mb-3">
//         <FormLabel>Categoría</FormLabel>
//         <Form.Select>
//           <option>
//             TODO:map para traer todos los registros de categorias
//           </option>
//         </Form.Select>
//         <Form.Text className="text-muted">
//           Selecciona la categoría a la que pertenece el ítem.
//         </Form.Text>
//       </FormGroup>
//       <FormGroup className="mb-3">
//         <FormLabel>Tipo</FormLabel>
//         <Form.Select>
//           <option>TODO:map para traer todos los registros de tipos</option>
//         </Form.Select>
//         <Form.Text className="text-muted">
//           Selecciona el tipo al que pertenece el ítem.
//         </Form.Text>
//       </FormGroup>
//       <FormGroup className="mb-5">
//         <FormLabel>Propiedades</FormLabel>
//         <FormControl
//           as="textarea"
//           placeholder="Ingresa las propiedades TODO: aquí debe aparecer un template predefinido"
//           style={{ height: "200px" }}
//         />
//       </FormGroup>
//       <FormGroup controlId="image0" className="mb-3">
//         <FormLabel>Imagen principal</FormLabel>
//         <FormControl type="file" onChange={handleChangeFile} />
//       </FormGroup>
//       <FormGroup controlId="media1">
//         <FormLabel>Otros archivos de visualización</FormLabel>
//         <FormControl type="file" onChange={handleChangeFile} />
//       </FormGroup>
//       <FormGroup controlId="media2">
//         <FormControl type="file" onChange={handleChangeFile} />
//       </FormGroup>
//       <FormGroup controlId="media3">
//         <FormControl type="file" onChange={handleChangeFile} />
//       </FormGroup>
//       <FormGroup controlId="media4">
//         <FormControl type="file" onChange={handleChangeFile} />
//       </FormGroup>
//       <Button type="submit">Crear ítem</Button>
//     </Form>
//   </Modal.Body>
//   <Modal.Footer>
//     <Button onClick={props.onHide}>Cerrar</Button>
//   </Modal.Footer>
// </Modal>
