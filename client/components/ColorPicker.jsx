import React from 'react';

import './ColorPicker.less';

const COLORS = ['#FFFFFF', '#80D8FF', '#FFFF8D', '#FF8A80', '#CCFF90', '#CFD8DC', '#FFD180'];

class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ColorPicker">
                {
                    COLORS.map(color => {
                        return (
                            <div
                                key={color}
                                className={
                                    this.props.value !== color
                                        ? 'ColorPicker__swatch'
                                        : 'ColorPicker__swatch selected'
                                }
                                style={{ backgroundColor: color }}
                                onClick={() => this.props.onChange(color)}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default ColorPicker;