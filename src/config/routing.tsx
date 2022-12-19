import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { CustomButtons } from "../components/buttons/buttons";
import { CustomError } from "../components/errors/errors";
import { CustomHome } from "../components/layout/home/home";
import { CustomInputs } from "../components/inputs/inputs";

export const CustomRouter:FC<{}> = () => (
    <Routes>
          <Route path="/"  element={<CustomHome />} errorElement={<CustomError/>}   />
          <Route path="/home"  element={<CustomHome />} errorElement={<CustomError/>}   />
          <Route path="/inputs"  element={<CustomInputs />} errorElement={<CustomError/>}   />
          <Route path="/buttons" element={<CustomButtons />}  errorElement={<CustomError/>}  />

          
          <Route path="*" element={<CustomError/>}  />

      </Routes>
);
