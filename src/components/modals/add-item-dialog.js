import React from "react";
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
  Input
} from "@mui/material";

function AddItemDialog({open, onClose}) {

  const handleChangeField =() => {
    console.log("change field")
  }
  const handleChangeFile =() => {
    console.log("change field")
  }
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Agregar nuevo item</DialogTitle>
      <DialogContent>
      <form>
          <FormGroup>
            <TextField 
              required
              name="name" 
              color="primary" 
              variant="standard" 
              label="Nombre del componente"
               />
            <TextField 
              required 
              name="quantity"
              type="number" 
              color="primary" 
              variant="standard" 
              label="Cantidad del componente" />
            <TextField 
              required
              name="unit_price"
              type="number"  
              color="primary" 
              variant="standard" 
              label="Precio unitario" />
          </FormGroup>
          <FormGroup sx={{mt:2}}>
            <FormLabel>Otros archivos/media</FormLabel>
            <Input 
              type="file" 
              onChange={handleChangeFile} 
              accept="image/*" 
              capture="user" />
          </FormGroup>
          <FormGroup>
          <Input 
              type="file" 
              onChange={handleChangeFile} 
              accept="image/*" 
              capture="user" />
          </FormGroup>
          <FormGroup>
          <Input 
              type="file" 
              onChange={handleChangeFile} 
              accept="image/*" 
              capture="user" />
          </FormGroup>
          <FormGroup>
          <Input 
              type="file" 
              onChange={handleChangeFile} 
              accept="image/*" 
              capture="user" />
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
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onClose}>Subscribe</Button>
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
