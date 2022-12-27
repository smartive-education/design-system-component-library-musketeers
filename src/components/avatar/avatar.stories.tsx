import React from "react";
import {storybookMeta} from '../components.config';
import {Avatar} from "./avatar";
import {AvatarSize} from "./avatar.types";

export default {
    title: `${storybookMeta.type}/Avatar`,
    component: Avatar,
    argTypes: {
        src: {
            control: {type: 'text'},
        },
        alt: {
            control: {type: 'text'},
        },
        size: {
            options: [AvatarSize.S, AvatarSize.M, AvatarSize.L, AvatarSize.XL],
            control: {type: 'select'},
        },
        showBorder: {
            control: {type: 'boolean'},
        },
    },
};

const withSingleAvatar = (args: any) => {
    return (
        <Avatar src={args.src} alt={args.alt} size={args.size} showBorder={args.showBorder}></Avatar>
    );
};

export const WithSingleAvatar: any = withSingleAvatar.bind({});
WithSingleAvatar.args = {
    src: '',
    alt: '',
    size: AvatarSize.M,
    showBorder: false,
};
