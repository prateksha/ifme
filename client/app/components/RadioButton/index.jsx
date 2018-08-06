// @flow
import React from 'react';
import css from './RadioButton.scss';

type Props = {
  id: string;
  label: string;
  checked?: boolean;
  update?: (id: string, checked: boolean) => void,
};

type State = {
  checked: boolean;
};

export class RadioButton extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { checked: !!this.props.checked };
  }
  toggle = () => {
    const { update } = this.props;
    const checked = !this.state.checked;
    this.setState({ checked });
    update(this.props.id, checked);
  };

  render() {
    const { id, label } = this.props;
    const { checked } = this.state;
    const radioButtonClassNames = `radioButton ${css.radioButton} ${
      checked ? css.radioButtonUnchecked : css.radioButtonChecked
    }`;
    const labelClassNames = `radioButtonLabel ${css.radioButtonLabel}`;
    return (
      <div className={css.radioButtonWrapper} id={id}>
        <div
          role="presentation"
          className={radioButtonClassNames}
          onClick={() => this.toggle()}
        />
        <label htmlFor={id} className={labelClassNames}>
          {label}
        </label>
      </div>
    );
  }
}
