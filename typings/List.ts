export interface Props {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  photo: string;
  setPhoto: (photo: string) => void;
  view: boolean;
  setView: (view: boolean) => void;
  list: { assets: [Object] };
  setList: (list: { assets: [Object] }) => void;
}
