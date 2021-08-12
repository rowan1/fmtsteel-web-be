import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import { usersRouter, careerRouter, contactsRouter, servicesRouter, projectsRouter, clientsRouter, subServicesRouter } from "./routes";
import { User } from "./entity/User";
import * as cors from "cors";

createConnection()
  .then(async (connection) => {
    // create express app
    const app = express();
    let corsOptions = {
      allowedHeaders: "*",
      origin: "*",
      exposedHeaders: "newToken",
      methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE'
    }

  app.use(cors(corsOptions));
  
  app.use(usersRouter)
  app.use(careerRouter)
  app.use(contactsRouter);
  app.use(servicesRouter);
  app.use(projectsRouter);
  app.use(clientsRouter);
  app.use(subServicesRouter);
  app.use(bodyParser.json());
  app.use(express.static('public'))

  // register express routes from defined application routes
    // Routes.forEach((route) => {
    //   (app as any)[route.method](
    //     route.route,
    //     (req: Request, res: Response, next: Function) => {
    //       const result = new (route.controller as any)()[route.action](
    //         req,
    //         res,
    //         next
    //       );
    //       if (result instanceof Promise) {
    //         result.then((result) =>
    //           result !== null && result !== undefined
    //             ? res.send(result)
    //             : undefined
    //         );
    //       } else if (result !== null && result !== undefined) {
    //         res.json(result);
    //       }
    //     }
    //   );
    // });

    // setup express app here
    // ...

    // start express server
    app.listen(3001);

    console.log(
      "Express server has started on port 3001. Open http://localhost:3001/users to see results"
    );
  })
  .catch((error) => console.log(error));
