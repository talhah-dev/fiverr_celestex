import Footer from '@/components/Footer';
import React from 'react'

interface Props {
    children: React.ReactNode;
}

export default function Wrapper(props: Props) {
    return (
        <div>
            {props.children}
            <Footer />
        </div>
    )
}
