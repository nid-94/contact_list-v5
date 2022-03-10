import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../JS/actions/contact";
import { Spinner } from "react-bootstrap";
import ContactCard from "./ContactCard";
const ContactList = () => {
    const dispatch = useDispatch();
    const listContact = useSelector(
        (state) => state.contactReducer.listContact
    );
    const load = useSelector((state) => state.contactReducer.load);
    useEffect(() => {
        dispatch(getContacts());
    }, []);
    console.log(listContact);
    return <div>hhhh</div>;
};

export default ContactList;
