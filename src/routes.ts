import { UserController } from "./controller/UserController";
import { ClientController } from "./controller/ClientController";
import { CareerController } from "./controller/CareerController";
import { ContactController } from "./controller/ContactController";
import { ProjectController } from "./controller/ProjectController";
import { ServiceController } from "./controller/ServiceController";


var express = require('express');
export const usersRouter = express.Router();
export const projectsRouter = express.Router();
export const clientsRouter = express.Router();
export const careerRouter = express.Router();
export const contactsRouter = express.Router();
export const servicesRouter = express.Router();
export const subServicesRouter = express.Router();

usersRouter.post('/users/signin' ,UserController.signIn)
usersRouter.post('/users/decodejwt' ,UserController.decodeJWT)


projectsRouter.get('/projects', ProjectController.all);
projectsRouter.post('/projects', ProjectController.save);
projectsRouter.delete('/project/:id', ProjectController.remove);
projectsRouter.put('/project/:id', ProjectController.edit);

careerRouter.post('/careers',CareerController.save);
careerRouter.get('/careers', CareerController.all);

contactsRouter.get('/contacts', ContactController.one);
contactsRouter.post('/contacts', ContactController.save);

servicesRouter.get('/services', ServiceController.all);
servicesRouter.get('/service/:id', ServiceController.one);
servicesRouter.post('/services', ServiceController.save);
servicesRouter.delete('/service/:id', ServiceController.remove);
servicesRouter.put('/service/:id', ServiceController.edit);
servicesRouter.get('/services/sub-services/:id', ServiceController.fetchSubServices);

clientsRouter.get('/clients', ClientController.all);
clientsRouter.post('/clients', ClientController.save);
clientsRouter.delete('/client/:id', ClientController.remove);

subServicesRouter.get('/sub-services/:id', ServiceController.fetchSubServices);
subServicesRouter.post('/sub-services/:serviceId', ServiceController.saveSubService);
subServicesRouter.delete('/sub-service/:id', ServiceController.removeSubService);
// subServicesRouter.get('/services/sub-services/:id', ServiceController.fetchSubServices);

// export const Routes = [
//   {
//     method: "get",
//     route: "/users",
//     controller: UserController,
//     action: "all",
//   },
//   {
//     method: "get",
//     route: "/users/:id",
//     controller: UserController,
//     action: "one",
//   },
//   {
//     method: "post",
//     route: "/users",
//     controller: UserController,
//     action: "save",
//   },
//   {
//     method: "delete",
//     route: "/users/:id",
//     controller: UserController,
//     action: "remove",
//   },
//   {
//     method: "post",
//     route: "/users/signin",
//     controller: UserController,
//     action: "signIn",
//   },
//   {
//     method: "post",
//     route: "/users/decodejwt",
//     controller: UserController,
//     action: "decodeJWT",
//   },
//   {
//     method: "get",
//     route: "/clients",
//     controller: ClientController,
//     action: "all",
//   },
//   {
//     method: "get",
//     route: "/clients/:id",
//     controller: ClientController,
//     action: "one",
//   },
//   {
//     method: "post",
//     route: "/clients",
//     controller: ClientController,
//     action: "save",
//   },
//   {
//     method: "delete",
//     route: "/clients/:id",
//     controller: ClientController,
//     action: "remove",
//   },
//   {
//     method: "get",
//     route: "/careers",
//     controller: CareerController,
//     action: "all",
//   },
//   {
//     method: "get",
//     route: "/careers/:id",
//     controller: CareerController,
//     action: "one",
//   },
//   {
//     method: "post",
//     route: "/careers",
//     controller: CareerController,
//     action: "save",
//   },
//   {
//     method: "delete",
//     route: "/careers/:id",
//     controller: CareerController,
//     action: "remove",
//   },
//   {
//     method: "get",
//     route: "/contacts",
//     controller: ContactController,
//     action: "all",
//   },
//   {
//     method: "get",
//     route: "/contacts/:id",
//     controller: ContactController,
//     action: "one",
//   },
//   {
//     method: "post",
//     route: "/contacts",
//     controller: ContactController,
//     action: "save",
//   },
//   {
//     method: "delete",
//     route: "/contacts/:id",
//     controller: ContactController,
//     action: "remove",
//   },
//   {
//     method: "get",
//     route: "/projects",
//     controller: ProjectController,
//     action: "all",
//   },
//   {
//     method: "get",
//     route: "/projects/:id",
//     controller: ProjectController,
//     action: "one",
//   },
//   {
//     method: "post",
//     route: "/projects",
//     controller: ProjectController,
//     action: "save",
//   },
//   {
//     method: "delete",
//     route: "/projects/:id",
//     controller: ProjectController,
//     action: "remove",
//   },
//   {
//     method: "get",
//     route: "/services",
//     controller: ServiceController,
//     action: "all",
//   },
//   {
//     method: "get",
//     route: "/services/:id",
//     controller: ServiceController,
//     action: "one",
//   },
//   {
//     method: "post",
//     route: "/services",
//     controller: ServiceController,
//     action: "save",
//   },
//   {
//     method: "delete",
//     route: "/services/:id",
//     controller: ServiceController,
//     action: "remove",
//   },
// ];
