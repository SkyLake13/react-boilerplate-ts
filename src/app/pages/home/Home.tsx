import React, { useEffect, useState } from 'react';
import { Main } from '../../main/Main';
import { AxiosResponse } from 'axios';
import createHttpClient from '../../http/http-factory';

export default function Home(): JSX.Element {
    const [sections, setSections] = useState<{heading: string, content: string}[]>([]);

    useEffect(() => {
        createHttpClient().get<any[]>('/sections?limit=5')
        .then((res: AxiosResponse<any[]>) => 
        res.data.map(r => { 
            return { 
            heading: r.heading,
            content: r.content
        }}))
        .then(res => {
            setSections(res);
        });
    }, []);

    return (
        <Main sections={sections} />
    );
}