import * as React from 'react';

export interface Props {
    value?: string | null;
    onClick: () => void;
}
class Square extends React.Component<Props, { value?: string | null }> {
    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}
export default Square;