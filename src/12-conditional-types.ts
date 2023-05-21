interface NumberLabel {
  id: number;
}

interface StringLabel {
  name: string;
}

type CompleteLabel<Label extends string | number> = Label extends number
  ? NumberLabel
  : StringLabel;

function createLabel<Label extends number | string>(
  label: Label
): CompleteLabel<Label> {
  throw "";
}

const stringLabel = createLabel("");
const numberLabel = createLabel(132);
stringLabel.name;
numberLabel.id;
