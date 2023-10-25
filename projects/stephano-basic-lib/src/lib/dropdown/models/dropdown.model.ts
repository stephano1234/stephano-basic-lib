export interface DropdownData {
  value: NonNullable<unknown>;
  display: NonNullable<unknown>;
  data: NonNullable<unknown>;
  empty?: boolean;
}

export const EMPTY_DROPDOWN_DATA: DropdownData = {
  value: {},
  display: 'NO DATA',
  data: {},
  empty: true,
};
