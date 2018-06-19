import React from 'react';

const MyGenericWidgetComponent = ({
    onClick,
    title
}) => <pre onClick={onClick}>
    I'm a generic widget: { title }
    </pre>;

export default MyGenericWidgetComponent;
