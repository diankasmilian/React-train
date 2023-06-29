import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { MaterialEditor } from './MaterialEditor/MaterialEditor';
import * as API from '../services/api';
import { Materials } from './MaterialEditor/Materials';
export class App extends Component {
  state = {
    materials: [],
    isLoading: false,
    error: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const materials = await API.getMaterial();
      this.setState({
        materials,
        isLoading: false,
      });
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  }

  addMaterial = async (values) => {
    try {
      this.setState({ isLoading: true });
      const material = await API.addMaterial(values);
      this.setState((state) => ({
        materials: [...state.materials, material],
        isLoading: false,
      }));
    } catch (error) {
      this.setState({ error });
    }
  };

  deleteMaterial = async (id) => {
    try {
      await API.deleteMaterial(id);
      this.setState((state) => ({
        materials: state.materials.filter((material) => material.id !== id),
      }));
    } catch (error) {
      this.setState({ error });
    }
  };

  updateMaterial = async (fields) => {
    try {
      const update = await API.updateMaterial( fields);
      this.setState((state) => ({
        materials: state.materials.map((material) =>
          material.id === fields.id ? update : material
        ),
      }));
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { isLoading, materials, error } = this.state;
    return (
      <Layout>
        <GlobalStyle />
        {error && <p>Oh, sorry, this is error</p>}
        <MaterialEditor onSubmit={this.addMaterial} isSubmitting={isLoading} />
        {isLoading ? (
          'LOADING...'
        ) : (
          <Materials
            items={materials}
            onDelete={this.deleteMaterial}
            onUpdate={this.updateMaterial}
          />
        )}
      </Layout>
    );
  }
}
