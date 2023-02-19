"use client"
import useSWR from "swr"
import Select from "react-select";


const fetchModels = () => fetch("/api/getEngines").then(res => res.json());


const SelectModel = () => {
      const {
        data: models,
        error,
        isLoading,
      } = useSWR("/api/getEngines", fetchModels);

      const {data: model , mutate:setModel} = useSWR("model", {
        fallbackData:  "text-davinci-003"
      })


  return (
    <section>
      <Select
     defaultValue={model}
     placeholder={model}
        className="bg-black/50 border-lime-50/20 mt-2 text-lime-600 w-full"
        options={models?.modelOptions}
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        classNames={{
          control: (state) => "bg-black/50 border border-lime-50/20",
        }}
        onChange={(e)=> setModel(e.value)}
      />
    </section>
  );
}

export default SelectModel