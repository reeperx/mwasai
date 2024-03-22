import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import React from "react";

const AddTransofrmationTypePage = ({ params: { type } }: SearchParamProps) => {
  const transformation = transformationTypes[type];
  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
      <TransformationForm />
    </>
  );
};

export default AddTransofrmationTypePage;
