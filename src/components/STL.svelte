<script lang="ts">
  import { T, useLoader, useThrelte } from '@threlte/core';
  import { createEventDispatcher } from 'svelte'
  import { BufferGeometry, Color } from 'three';
  import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

  export let filename: string;
  // use pink as fallback color
  export let color: Color = new Color('pink');
  export let scale: number[] = [1, 1, 1];
  export let rotation: number[] = [1, 1, 1];
  export let position: number[] = [1, 1, 1];


  const dispatch = createEventDispatcher<{
    load: BufferGeometry
    unload: undefined
    error: string
  }>();

  const { invalidate } = useThrelte();

  const loader = useLoader(STLLoader, () => new STLLoader());

  let geometry: BufferGeometry | undefined = undefined;
  const onLoad = (loadedGeometry: BufferGeometry) => {
    if (geometry) {
      dispatch('unload');
    }
    geometry = loadedGeometry;
    invalidate('STL: model loaded');
    dispatch('load', loadedGeometry);
  }

  const onError = (e: ErrorEvent) => {
    console.error(e);
    dispatch('error');
  }


  $: loader.load(filename, onLoad, undefined, onError)
</script>

{#if geometry}
  {@html `<!-- include stl: ${filename} ${scale} -->`}
  <T.Mesh castShadow receiveShadow geometry={geometry} scale={scale}
    position={position} rotation={rotation}>
		<T.MeshLambertMaterial color={color} />
	</T.Mesh>
{/if}

