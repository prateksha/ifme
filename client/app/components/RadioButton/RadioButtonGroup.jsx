// @flow
import React from 'react';

export interface Props {
  children: any;
}

export interface State {
  options: string[];
  checked: boolean;
}

export class RadioButtonGroup extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const { children } = this.props;
    const options = [];
    children.forEach((child: any) => {
      const { id } = child.props;
      options.push(id);
    });
    this.state = { options };
  }
  update = (id: string, checked: boolean) => {
    let i;
    const { options } = this.state;
    const n = options.length;
    //const index = options.indexOf(id);

    let index;
    if (id === 'radioButton-one') { index = 0; } else if (id === 'radioButton-two') { index = 1; } else { index = 2; }
    //console.log(index);
    //this.setState({ options });
    for (i = 0; i < n; i += 1) {
      if (index !== i) {
        options[i] = false;
      //  this.setState({ options });
      } else {
        options[i] = true;
        if (!checked) {
          options[i] = false;
        }
      }
    }
    console.log(options);
  };

childrenRender = () => {
  const { children } = this.props;
  let newChildren;
  if (Array.isArray(children)) {
    newChildren = children.map((child: any) =>
      React.cloneElement(child, {
        update: this.update,
        key: child.props.id,
      }),
    );
  } else {
    newChildren = React.cloneElement((children: any), {
      update: this.update,
    });
  }
  return newChildren;
};
render() {
  return (
    <div className="RadioButtonGroup">{ this.childrenRender() }</div>
  );
}
}
