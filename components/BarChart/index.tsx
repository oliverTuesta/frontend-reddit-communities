'use client'
import React, { useState, useEffect } from 'react'
import * as d3 from 'd3'

export interface CanvaProps {}

const BarChart = (props: CanvaProps): React.ReactElement => {
    const [data, setData] = useState<any>([])
    const svgRef = React.useRef<SVGSVGElement>(null)

    useEffect(() => {
        d3.json('/data/reddit-communities.json').then((data) => {
            console.log('data length', Object.keys(data).length)
            // this data paremeter is an object with keys as the subreddits and values as the number of times they appear in the dataset
            setData(
                Object.keys(data).map((key) => {
                    return {
                        subreddit: key,
                        count: data[key],
                    }
                })
            )
        })
    }, [])

    useEffect(() => {
        if (data.length > 0) {
            createBarChart()
        }
    }, [data])

    /*
     * data format:
     * {"rddtgaming": 0, "rddtrust": 0, "xboxone": 1, "battlefield_4": 1, "ps4": 1, ... }
     * */

    const createBarChart = () => {
        const svg = d3.select(svgRef.current)
        const width = 1000
        const height = 500
        const margin = { top: 20, right: 20, bottom: 20, left: 20 }
        const innerWidth = width - margin.left - margin.right
        const innerHeight = height - margin.top - margin.bottom

        const xScale = d3
            .scaleBand()
            .domain(data.map((d) => d.subreddit))
            .range([0, innerWidth])
            .padding(0.1)

        const yScale = d3
            .scaleLinear()
            .domain([0, d3.max(data, (d) => d.count)])
            .range([innerHeight, 0])

        const g = svg
            .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`)

        g.append('g')
            .attr('transform', `translate(0, ${innerHeight})`)
            .call(d3.axisBottom(xScale))

        g.append('g').call(d3.axisLeft(yScale))

        g.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', (d) => xScale(d.subreddit))
            .attr('y', (d) => yScale(d.count))
            .attr('width', xScale.bandwidth())
            .attr('height', (d) => innerHeight - yScale(d.count))
            .attr('fill', 'steelblue')
    }

    return <svg ref={svgRef}></svg>
}

export default BarChart
