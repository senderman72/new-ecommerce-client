import React, { useState } from "react";
import useCustomer from "../../../hooks/useCustomer";
import {
  Form,
  Input,
  Inputbox,
  FormError,
} from "../../styled/styledAdmin/customerStyled/CreatCustomerForm";
import { AddToCartBtn } from "../../styled/styledProducts/ProductCards";
import { ICustomer } from "../../../models/ICustomer";

const CreateCustomer = () => {
  const { addCustomer } = useCustomer();

  const [formData, setFormData] = useState({
    id: 0,
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    street_address: "",
    postal_code: "",
    city: "",
    country: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      formData.firstname.trim() === "" ||
      formData.lastname.trim() === "" ||
      formData.email.trim() === "" ||
      formData.phone.trim() === "" ||
      formData.street_address.trim() === "" ||
      formData.postal_code.trim() === "" ||
      formData.city.trim() === "" ||
      formData.country.trim() === ""
    ) {
      setErrorMessage("Alla fält måste fyllas i.");
      return;
    }

    try {
      const newCustomer: ICustomer = { ...formData };

      await addCustomer(newCustomer);

      setFormData({
        id: 0,
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        street_address: "",
        postal_code: "",
        city: "",
        country: "",
      });

      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Ett fel uppstod vid skapande av kund.");
      console.error("Error creating customer:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Inputbox>
        <Input
          type="text"
          name="firstname"
          placeholder="First Name"
          value={formData.firstname}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={formData.lastname}
          onChange={handleChange}
          required
        />
      </Inputbox>
      <Inputbox>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          required
        />
      </Inputbox>
      <Inputbox>
        <Input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="street_address"
          placeholder="Street Address"
          value={formData.street_address}
          onChange={handleChange}
          required
        />
      </Inputbox>
      <Inputbox>
        <Input
          type="text"
          name="postal_code"
          placeholder="Postal Code"
          value={formData.postal_code}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </Inputbox>
      {errorMessage && <FormError>{errorMessage}</FormError>}
      <AddToCartBtn type="submit">Lägg till kund</AddToCartBtn>
    </Form>
  );
};

export default CreateCustomer;
