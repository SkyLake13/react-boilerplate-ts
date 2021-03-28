import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { useState } from 'react';

export default function Nav(): JSX.Element {

    const [routes] = useState([
        { text: 'Main', url: '/' },
        { text: 'Page 1', url: '/page1' },
        { text: 'Page 2', url: '/page2' },
    ]);

    return (
        <List>
            {routes.map((route, index) => (
                <ListItem button key={route.url}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={route.text}>
                    </ListItemText>
                </ListItem>
            ))}
        </List>
    );
}