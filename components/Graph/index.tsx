'use client'
import type { ReactElement } from 'react'
import { useState, useEffect } from 'react'
import * as d3 from 'd3'

export interface CanvaProps {}

const Graph = (props: CanvaProps): ReactElement => {
    const [data, setData] = useState([25, 30, 45, 60, 20])
    const [svg, setSvg] = useState<SVGSVGElement | null>(null)

    useEffect(() => {
        if (svg) {
            const svgElement = d3.select(svg)
            svgElement
                .selectAll('rect')
                .data(data)
                .enter()
                .append('rect')
                .attr('width', 40)
                .attr('height', (d) => d)
                .attr('fill', 'orange')
                .attr('x', (d, i) => i * 45)
                .attr('y', (d) => 150 - d)
        }
    }, [svg])

    return (
        <div className="graph" id="graph">
            <svg ref={(el) => setSvg(el)}></svg>
        </div>
    )
}

export default Graph
