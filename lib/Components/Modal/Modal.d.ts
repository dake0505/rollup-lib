import * as React from 'react';
export interface ModalProps {
    visible?: boolean;
    title?: React.ReactNode;
    closable?: boolean;
    onOk?: (e: React.MouseEvent<HTMLElement>) => void;
    onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
}
