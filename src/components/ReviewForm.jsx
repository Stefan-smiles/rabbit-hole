import * as Form from '@radix-ui/react-form';
import React from 'react';

export default function ReviewForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Form Data:', data);
  };

return(
    <Form.Root>
    <Form.Field name="media-title">
        <Form.Label>media-title</Form.Label>
        <Form.Message>please enter a media-title</Form.Message>
        <Form.ValidityState />
    </Form.Field>

    <Form.Field name="review">
        <Form.Label />
        <Form.Control />
        <Form.Message />
        <Form.ValidityState />
    </Form.Field>

    <Form.Message />
    <Form.ValidityState />

    <Form.Submit />
</Form.Root>
);

);}