import { TextField, Container, Button } from '@material-ui/core';
import { CSSProperties } from 'react';
import { useForm } from 'react-hook-form';

import './App.scss';

interface FormData {
    username: string;
    password: string;
}

const form: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center'
}

export default function () {
    const { register, handleSubmit, errors } = useForm<FormData>();

    const onSubmit = (dta: FormData) => {
        console.log(dta);
    };

    return (
        <Container maxWidth="xs">
            <form style={form} onSubmit={handleSubmit(onSubmit)}>
                <TextField label="Username" variant="outlined" style={{margin: '10px'}}
                    name="username" {...(errors.username && {error: true})} inputRef={register({ required: true })} />
                <TextField type="password" label="Password" variant="outlined" style={{margin: '10px'}}
                    name="password" {...(errors.password && {error: true})} inputRef={register({ required: true })} />
                <Button type="submit" variant="contained" color="primary" style={{margin: '10px'}}>
                    Primary
                </Button>
            </form>
        </Container>
    );
}